import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  main_container: {
    backgroundColor: '#D6FAF9',
    flex: 1,
  },
  header_content: {
    margin: 5,
    flexDirection: 'row',
    flex: 0.20,
    justifyContent: 'space-between',
  },
  header_text: {
    textAlign: 'left',
    color: '#073E40',
    fontWeight:"bold",
    fontSize:30,
    fontStyle:"italic",
    
  },
  to_do_counter: {
    color: '#073E40',
    fontWeight:"bold",
    fontSize:30,
    fontStyle:"italic"
  },
  input: {
    backgroundColor: '#BAC5F7',
    borderBottomWidth: 1,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomColor: '#04293A',
   
  },
  
  footer_content: {
    position:"relative",
    
    backgroundColor: '#BAC5F7',
    margin: 15,
    borderRadius: 10,
    marginBottom:30
  },
  add_button_text: {
    
    
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical:"center",
    
    height:30,
    fontSize:15
  },
  item_container:{
    backgroundColor:"#6E4CEB",
    borderRadius:5,
    margin:5,
    padding:10
  },
  todo_item:{
    color:"#FFFFFF",
    fontWeight:"700",
    
  },
  add_button:{
    borderRadius:5,
    backgroundColor: '#8363EE',
    marginVertical:10,
    marginHorizontal: 45,
  }
});
