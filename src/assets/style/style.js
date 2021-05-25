import {StyleSheet, Dimensions} from 'react-native';

const colors = {content: '#8bc34a'};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.content,
  },
  navigation: {
    justifyContent: 'space-between',
  },
  addContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 30,
    bottom: 20,
    right: 10,
  },
  delContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'green',
    borderRadius: 30,
    bottom: 70,
    right: 10,
  },
  add: {
    fontSize: 50,
    bottom: 5,
  },
  del: {
    height: 25,
    width: 25,
  },
  item: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
    borderWidth: 2,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bottomNav: {
    height: 50,
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: Dimensions.get('window').width * 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'grey',
  },
  tabText: {
    color: 'white',
  },
  inputTitle: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 20,
  },
  inputDesc: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.3,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

module.exports = styles;
