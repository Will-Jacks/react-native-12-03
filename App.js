import { StyleSheet, Text, ScrollView, View, StatusBar, SafeAreaView } from 'react-native';
import Header from './components/header';
import Body from './components/body';
import Stories from './components/stories';



export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={styles.container}>
        <Header />
        <Stories />
        <Body />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
