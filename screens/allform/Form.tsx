import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import {question1,question2,question3,question4} from '../../components/questions/Question';
import { ScrollView, Text, View} from 'react-native';
import FormInput from '../../components/form_text_input/FormInput';
import styles from './style';
import TcikButton from '../../components/tickButton/TickButton';
import SelectButton from '../../components/selectButton/SelectButton';
import RedioButton from '../../components/redioButton/RedioButton';
import Buttons from '../../components/buttons/Button';
import Signature from '../../components/signature/Signature';
import Calendar from '../../components/calendar/Calendar';
import CheckButton from '../../components/checkbutton/CheckButton';
import BCCCC from '../../components/bcc&cc/BCC&CC';
import FinalPage from '../finalPage/FinalPage';
import { useNavigation } from '@react-navigation/native';

function Form() {
  const nav:any = useNavigation()
  const [form1, setform1] = useState(true);
  const [form2, setform2] = useState(true);
  const [form3, setform3] = useState(true);
  const [form4, setform4] = useState(true);
  const [tick,settick]  = useState(2)
  const [tick1,settick1]  = useState(1);
  

  function Form1() {
    return (
      <>
        {question1.map((val,index )=> (
          <>
          <View style={styles.Container} key={index}>
            <Text style={styles.lebel}>{val.lebel}</Text>
              {val.isDate ? (
                <Calendar />
              ) : val.isNumber ? (
                <FormInput type="number-pad" />
              ) : val.isText ? (
                <FormInput type='default' onChange={(e:any)=>{console.warn(e)}}/>
              ) : (
                ""
              )}
            </View>
          </>
        ))}
      </>
    );
  }
  function Form2(){
    return(<>
    {question2.map((val,index) => (
          <>
          <View style={styles.Container} key={index}>
            <Text style={styles.lebel}>{val.lebel}</Text>
            
              {val.isDate ? (
                <Calendar/>
              ) : val.isNumber ? (
                <FormInput type="number-pad" />
              ) : val.isText ? (
                <FormInput type='default'/>
              ) : val.isbool && val.id == 8 ? (
                <TcikButton tick={tick1}  settick={settick1} />
              ) :val.isbool && val.id == 12 ? (
              <TcikButton tick={tick}  settick={settick} />
            ):  "" }
            </View>
          </>
        ))}
    </>)
  }
  function Form3(){
    return(<>
      {
        question3.map((val,index)=>(<>
        <View style={styles.Container} key={index}>
        <Text style={styles.lebel}>{val.lebel+val.ansr}</Text>
         {
                val.isText ? <FormInput type='default' onChange={(e:any)=> {console.warn(val.ansr);val.ansr=e}}/> :
                val.isSelect ?   <SelectButton /> :
                val.isRedio ? <RedioButton/>  :
                val.isCheck ? <CheckButton/>  :""
         }
         </View>
      </> ))
      }
    </>)
  }
  function Form4(){
    return(<>
       {
        question4.map((val,index)=><>
         <View style={styles.Container} key={index}>
         <Text style={styles.lebel}>{val.Signature}</Text>
          {
            val.istext ? <BCCCC /> :
            val.isSignature ? 
            <View style={styles.signature}>
            <Signature />
            </View> :""
          }
         </View>
        </> )
       }
      
       <View style={{alignItems:'center'}}>
       <Buttons  title={"Submit"} style={styles.sameBtn} onPress={()=>{nav.navigate("finalForm")}}/>
       </View>
    </>)
  }
  return (
    <>
 
 <Navbar 
       form1Page={form1}
        setformPage1={setform1}
        form2Page={form2}
        setFormPage2={setform2}
        form3Page={form3}
        setFormPage3={setform3}
        form4Page={form4}
        setFormPage4={setform4}
      />

<ScrollView style={{zIndex:-1}}>
   <View style={{marginBottom:50}}>
    <Text style={styles.heading}>
      Report of thorough examination of equipment
    </Text>
   
      
      
      {form1 ? <Form1/> : ""}
      {form2 ? "" : <Form2/>}
      {form3 ? "" : Form3()}
      {form4 ? "" : Form4()}
    
      </View>
      </ScrollView>
    </>
  );
}

export default Form;
