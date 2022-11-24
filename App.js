import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './Components/AuthComponents/AuthContext';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <AuthProvider>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </AuthProvider> 
  );
}
