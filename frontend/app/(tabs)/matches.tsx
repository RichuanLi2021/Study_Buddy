import React, { useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const MatchesPage = () => {
  const [matches, setMatches] = useState([
    {
      id: 1,
      name: 'John Doe',
      university: 'University of Example',
      major: 'Computer Science',
      year: '3rd Year',
      studypref: 'Group Study',
      availability: 'Evenings',
      contact: 'Email: johndoe@example.com',
      image: require('../../assets/images/icon.png'), // placeholder image
    },
    {
      id: 2,
      name: 'Jane Smith',
      university: 'Example State University',
      major: 'Biology',
      year: '2nd Year',
      studypref: 'One-on-One',
      availability: 'Mornings',
      contact: 'Phone: (123) 456-7890',
      image: require('../../assets/images/icon.png'), // placeholder image
    },
    // Add more matches as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Filter matches based on search query
  const filteredMatches = matches.filter(match => match.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const handleMatchPress = (match) => {
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
          <TouchableOpacity onPress={() => handleMatchPress(item)} style={styles.matchItem}>
            <Image style={styles.matchImage} source={item.image} />
            <Text style={styles.matchName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Profile Details Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          {selectedMatch && (
            <View style={styles.modalContent}>
              <Image style={styles.modalImage} source={selectedMatch.image} />
              <Text style={styles.modalText}>Name: {selectedMatch.name}</Text>
              <Text style={styles.modalText}>University: {selectedMatch.university}</Text>
              <Text style={styles.modalText}>Major: {selectedMatch.major}</Text>
              <Text style={styles.modalText}>Year: {selectedMatch.year}</Text>
              <Text style={styles.modalText}>Study Preference: {selectedMatch.studypref}</Text>
              <Text style={styles.modalText}>Availability: {selectedMatch.availability}</Text>
              <Text style={styles.modalText}>Contact: {selectedMatch.contact}</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
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

export default MatchesPage;
