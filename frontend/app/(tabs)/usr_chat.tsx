import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { usr_data, UserType} from '@/constants/usrData';

const usr_chat = () => {

  //Hardcoded now
  const [matches, setMatches] = useState<UserType[]>(usr_data);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatch, setSelectedMatch] = useState<UserType | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filter matches based on search query
  const filteredMatches = matches.filter((match) =>
    match.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMatchPress = (match: UserType) => {
    setSelectedMatch(match);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for matches..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Matches List */}
      <FlatList
        data={filteredMatches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleMatchPress(item)}
            style={styles.matchItem}
          >
            <Image style={styles.matchImage} source={item.imgPath} />
            <Text style={styles.matchName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Profile Details Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {selectedMatch && (
            <View style={styles.modalContent}>
              <Image
                style={styles.modalImage}
                source={selectedMatch.imgPath}
              />
              <Text style={styles.modalText}>Name: {selectedMatch.name}</Text>
              <Text style={styles.modalText}>
                University: {selectedMatch.university}
              </Text>
              <Text style={styles.modalText}>
                Major: {selectedMatch.major}
              </Text>
              <Text style={styles.modalText}>
                Year: {selectedMatch.yearOfStudy}
              </Text>
              <Text style={styles.modalText}>
                Study Preference: {selectedMatch.preference}
              </Text>
              <Text style={styles.modalText}>
                Email: {selectedMatch.email}
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  matchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  matchImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  matchName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default usr_chat;