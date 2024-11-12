import { View, Text, Alert, ScrollView} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormLogin from '@/components/auth/forLogin/FormLogin';
import CustomButton from '@/components/auth/button/buttons';
import { validateEmail, validatePassword } from '@/components/auth/InputValidation/Input_validation';
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import Toast from 'react-native-toast-message';



const login = () => {
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Login Authentication
    const handleLoginPress = async () => {
        if (!validateEmail(value.email)) {
            Toast.show({
                type: 'error',
                text1: 'Invalid Email',
                text2: 'Please enter a valid email address.'
            });
            console.log('toast loaded')
            return;
        }

        if (!validatePassword(value.password)) {
            Toast.show({
                type: 'error',
                text1: 'Invalid Password',
                text2: 'Password must be at least 8 characters long.'
            });
        }

        if (value.email === null || value.password === null) {
            setValue({
                ...value,
                error: "Email or password cannot be empty.",
            });
            Toast.show({
                type: 'error',
                text1: 'Missing Credentials',
                text2: 'Email or password cannot be empty.',
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // login user
            await signInWithEmailAndPassword(auth, value.email, value.password)
                .then((userCredential)=> {
                    //user signed in
                    const user = userCredential.user;
                    console.log("Hello! :" + user)
                    Toast.show({
                        type: 'success',
                        text1: 'Login Successful',
                        text2: 'Welcome back!',
                        position: 'bottom',
                        bottomOffset: 40
                    });
                    // Redirect user to the main page after successful login
                    router.push('/(tabs)/usr_home')
                })
                .catch((err) => {
                    if(err.code ===  AuthErrorCodes.INVALID_PASSWORD || err.code === AuthErrorCodes.USER_DELETED) {
                        setValue({
                            ...value,
                            error: "The email address or password is incorrect"
                        })
                        Toast.show({
                            type: 'error',
                            text1: value.error,
                        })
                    } else {
                        console.log(err.code);
                        Toast.show({
                            type: 'error',
                            text1: 'Something went wrong...',
                            text2: err.message,
                        })
                    }
                });

        } catch (error) {
            setValue({
                ...value,
                error: error instanceof Error ? error.message : 'An unknown error occurred',
            });
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: value.error,
            });
        } finally {
            // Stop submitting
            setIsSubmitting(false);
        }
    };

    // Pass form data to backend endpoint for authentication
    // ...

    return (
        <SafeAreaView
            className="bg-orange-50 h-full"
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
            }}
        >
            <ScrollView>
                <View className='w-full justify-center h-full px-4 my-6'>
                        {/* <Image/> add image here */}
                        <Text 
                            className="text-2xl text-cyan-900 text-semibold mt-10 font-semibold"
                            style={{
                                marginBottom: 20,
                                textAlign: 'center',
                                fontSize: 28,
                                color: '#FF7900',
                                fontWeight: 700,
                            }}> 
                                Welcome!
                        </Text>

                    {/* Enter email */}
                    <FormLogin
                        title="Email"
                        value={value.email}
                        handleChangeText={(usrEmail) =>
                            setValue({ ...value, email: usrEmail })
                        }
                        otherStyles={{ marginTop: 7 }}
                        keyboardType="email-address"
                    />

                    {/* Enter password */}
                    <FormLogin
                        title="Password"
                        value={value.password}
                        handleChangeText={(usrPassword) =>
                            setValue({ ...value, password: usrPassword })
                        }
                        otherStyles={{ marginTop: 7 }}
                    />

                    {/* Display error message */}
                    {value.error ? (
                        <Text style={{ color: 'red', marginTop: 10 }}>
                            {value.error}
                        </Text>
                    ) : null}

                        {/* Login Button */}
                        <CustomButton
                            title="Login"
                            handlePress={handleLoginPress}
                            buttonStyle={{marginTop: 20}}
                            isLoading={false}
                        />

                        <View className='justify-center pt-5 flex-row gap-2'>
                            <Text className='text-base text-gray-50 font-normal'>
                                Don't have an account? 
                            </Text>
                            <Link 
                                href='/(auth_onBoardings)/sign-up' 
                                className='text-base font-extrabold text-orange-500'
                                style={{                                                       
                                color: 'blue',
                                fontWeight: 600,
                                textDecorationLine: 'underline',
                                
                                 }}> 
                                Sign-up now
                            </Link>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default login;