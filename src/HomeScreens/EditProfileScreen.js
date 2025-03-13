import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const EditProfileScreen = () => {
    const [name, setName] = useState('Shivani Rawat');
    const [email, setEmail] = useState('shivanirawat@gmail.com');
    const [dob, setDob] = useState('18/02/2004');
    const [interests, setInterests] = useState('');
    const [bio, setBio] = useState('');

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />

            <Text style={styles.label}>Date of Birth</Text>
            <TextInput style={styles.input} value={dob} onChangeText={setDob} />

            <Text style={styles.label}>Interests</Text>
            <TextInput style={styles.input} value={interests} onChangeText={setInterests} />

            <Text style={styles.label}>Short Bio</Text>
            <TextInput style={styles.input} value={bio} onChangeText={setBio} />

            {/* Consultancy Fees Dropdown */}
            <Text style={styles.label}>Consultancy Fees</Text>
            <DropDownPicker
                items={[
                    { label: 'Message - 200 Rs', value: 'message' },
                    { label: 'Audio Call - 299 Rs', value: 'audio' },
                    { label: 'Video Call - 399 Rs', value: 'video' },
                ]}
                defaultValue="message"
                containerStyle={{ height: 50, marginBottom: 20 }}
                style={styles.dropdown}
            />

            {/* Bank Details */}
            <Text style={styles.label}>Bank Details</Text>
            <TextInput style={styles.input} placeholder="Add new card..." />

            <Button title="Save Changes" onPress={() => alert('Profile Updated!')} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
    input: { borderWidth: 1, padding: 10, fontSize: 16, marginBottom: 15, borderRadius: 8 },
    dropdown: { backgroundColor: '#fafafa' },
});

export default EditProfileScreen;
