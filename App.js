import { NavigationContainer } from '@react-navigation/native';
import { StripeProvider } from '@stripe/stripe-react-native';
import { AuthProvider } from './Components/AuthComponents/AuthContext';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <StripeProvider publishableKey='pk_test_51KR942SAGVkM617lIrsxkWIRFChmrAmkI1s3gp3BaIrq3ioKZxmjMxU1dZYZyvjAdInDjFo48OBm5JqKndHYRhmH00UmcwJ48q'>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </StripeProvider>
  );
}
