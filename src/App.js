import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput, Pressable, Alert} from 'react-native';
import ToDo from './components/ToDo/';
import styles from './components/ToDo/Create_ToDo_Styles';

export default function App() {
  const [list, setlist] = useState([]);
  const [inputText, setinputText] = useState('');

 

  const renderList = ({item}) => (
    <ToDo deleteItem={deleteItemById} list_item={item} />
  );
  const listHeader = () => {
    return (
      <View style={styles.header_content}>
        <Text style={styles.header_text}>Yapılacaklar Listesi</Text>
        <Text style={styles.to_do_counter}>{list.length}</Text>
      </View>
    );
  };
  const handleChange = text => setinputText(text); //input deperi değiştiğinde state değerini güncelliyorum
  const handlePress = () => {
    //kullanıcı kaydet dediği anda input değeri var ise listeye ekleyerek güncelleme yapıyorum
    !!inputText //input değerinin varlığını sorguluyorum :)))))
      ? setlist([...list, {id: list.length, text: inputText}])
      : Alert.alert('Uyarı', 'Kaydedilecek bir şey yok');

    //inputun deperi kaydetme işleminden sonra tekrar sıfırlanıyor
    setinputText('');
  };

  const deleteItemById = delete_id => {
    const filteredList = list.filter(item => delete_id !== item.id);
    const changeId = filteredList.map(item => {
      item.id = item.id > delete_id ? item.id - 1 : item.id;
      return item;
    }); //listeden bir item silindiğinde silininen itemin idsinden büyü idleri bir azaltarak güncelliyorum (yeni eklenecek itemın idsi ile çakışmaması için)
    setlist(changeId);
  };

  return (
    <View style={styles.main_container}>
      <FlatList
        data={list}
        renderItem={renderList}
        keyExtractor={item => item.id}
        ListHeaderComponent={listHeader}
      />

      <View style={styles.footer_content}>
        <TextInput
          value={inputText}
          style={styles.input}
          onChangeText={handleChange}></TextInput>
        <Pressable onPress={handlePress} style={styles.add_button}>
          <Text style={styles.add_button_text}>Kaydet</Text>
        </Pressable>
      </View>
    </View>
  );
}
