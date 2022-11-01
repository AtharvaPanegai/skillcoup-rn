import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
