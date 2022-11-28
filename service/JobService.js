import axios from "axios"
import { BASE_URL } from "../Components/config";
// const BASE_URL = process.env.BASE_URL;

const getAllJobs = () => {
    axios.get(`${BASE_URL}/freelancer/getAllJobs`).then((res)=>{
        return res.data
    }).catch((err)=>{
        console.log(err)
    })
}

const getJobDetailsById = ({jobId})=>{
    return axios.post(`${BASE_URL}/freelancer/getJobDetailById`,jobId);
}

const submitProposal = ({...proposalDetails})=>{
    return axios.post(`${BASE_URL}/freelancer/submitProposalToJob`,proposalDetails);
}

const postJob = ({...jobDetails})=>{
    return axios.post(`${BASE_URL}/client/postjob`,jobDetails);
}

const assignJob = ({jobIdInput,freelancerId})=>{
    return axios.post(`${BASE_URL}/client/assignJob`,{jobIdInput,freelancerId});
}

const getProposals = ({jobIdInput})=>{
    return axios.post(`${BASE_URL}/job/proposals`,jobIdInput);
}

export const JobService = {
    getAllJobs,
    getJobDetailsById,
    submitProposal,
    postJob,
    assignJob,
    getProposals,
}