import { View, Text, ScrollView} from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import FormLogin from '@/components/auth/forLogin/FormLogin';
import CustomButton from '@/components/auth/button/buttons';
import { validateEmail, validatePassword } from '@/components/auth/InputValidation/Input_validation';
import { AuthErrorCodes, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/config/firebaseConfig';
import Toast from 'react-native-toast-message';
import Errors from '@/components/error_message/form_error';



const login = () => {
    const [value, setValue] = useState({
        email: "",
        password: "",
        error: {},
        isFormValid: false,
        touched: {
            email: false,
            password: false,
        },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handler for email field
    const handleEmailChange = (usrEmail: string) => {
        setValue((prev) => ({
        ...prev,
        email: usrEmail,
        touched: {
            ...prev.touched,
            email: true,
        },
        }));
    };
  
    // Handler for password field
    const handlePasswordChange = (usrPassword: string) => {
        setValue((prev) => ({
        ...prev,
        password: usrPassword,
        touched: {
            ...prev.touched,
            password: true,
        },
        }));
    };

    // Trigger form validation when any form value changes
    useEffect(()=>{
        validateForm();
    }, [value.email, value.password, value.touched.email, value.touched.password]);


    // Confirm if the user has touched the form or not.
    // const handleBlur = (field: string) => {
    //     setValue((prev) => ({
    //         ...prev,
    //         touched: {
    //             ...prev.touched,
    //             [field]: true,
    //         },
    //     }));
    // };
    

    //Form validation
    const validateForm = () => {
        let errors: Errors = {};

        if(!value.touched.email && !value.touched.password){
            return;
        }


        //Validate Email
        if(value.touched.email){
            if(value.email.length === 0){
                errors.email = "email is required"
            } else if(!validateEmail(value.email) ){
                errors.email = "email is invalid"
            }
        }

        //Validate password
        if(value.touched.password){
            if(value.password.length === 0){
                errors.password = "password is required"
            } else if(!validatePassword(value.password) ){
                errors.password = "Password is invalid"
            }
        }

        //Initialize error
        setValue((prev)=>({
            ...prev,
            error: errors
        }))

        let errorList = Object.keys(errors);
        //update form state
        
            setValue((prev)=>({
                ...prev,
                isFormValid: errorList.length === 0
            }))
    }

    //For testing purposes.
    console.log("\n")
    console.log(Object.keys(value.touched).join(" ") + ": " + Object.values(value.touched).join(" "))
    console.log("current errors: " + Object.values(value.error).length)
    
    // Login Authentication
    const handleLoginPress = async () => {

        if(!value.isFormValid){
            Toast.show({
                type: 'error',
                text1: 'Invalid Form',
                text2: 'Check your email and password to make sure they are correct'
            })
            return;

            setIsSubmitting(true);
        }
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
                            bottomOffset: 100
                        });

                        // Pause the navigation to the next page to allow the toast to show
                        setTimeout(() => {
                            router.push('/(tabs)/usr_home');
                        }, 2000);
                    })
                    .catch((err) => {
                        if(err.code ===  AuthErrorCodes.INVALID_PASSWORD || err.code === AuthErrorCodes.USER_DELETED) {
                            setValue({
                                ...value,
                                error: "The email address or password is incorrect"
                            })
                            return;
                        } else {
                            console.log(err.code);
                            Toast.show({
                                type: 'error',
                                text1: 'Check your email and password',
                                text2: err.message,
                                position: 'bottom',
                                bottomOffset: 100
                            })
                        }
                    });
    
            } catch (error) {
                setValue({
                    ...value,
                    error: error instanceof Error ? error.message : 'An unknown error occurred',
                });
               
            } finally {
                // Stop submitting
                setIsSubmitting(false);
            }
        };

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
                        handleChangeText={handleEmailChange}
                        // onBlur={()=> handleBlur('email')}
                        otherStyles={{ marginTop: 7 }}
                        keyboardType="email-address"
                    />

                        {<Text>Current email is: {value.email}</Text>}

                    {/* Enter password */}
                    <FormLogin
                        title="Password"
                        value={value.password}
                        handleChangeText={handlePasswordChange}
                        // onBlur={()=> handleBlur('password')}
                        otherStyles={{ marginTop: 7 }}
                    />

                        {<Text>Current password is: {value.password}</Text>}
                    

                    {/* Display error message */}
                    {(value.touched.email || value.touched.password) && Object.values(value.error).length > 0 && (
                        <Text style={{ color: 'red', marginTop: 10 }}>
                            {Object.values(value.error).join("\n")}
                        </Text>
                    )}

                        {/* Login Button */}
                        <CustomButton
                            title="Login"
                            handlePress={handleLoginPress}
                            buttonStyle={{marginTop: 20}}
                            disabled={!value.isFormValid}
                            isLoading={false}
                        />

                        <View className='justify-center pt-5 flex-row gap-2'>
                            <Text className='text-base text-red-950 font-normal'>
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
                                Create one
                            </Link>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default login;