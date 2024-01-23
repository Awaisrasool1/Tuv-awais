import SignatureCapture from "react-native-signature-capture";

function Signature() {
  return <>
       <SignatureCapture
        style={[{flex:2}]}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={"portrait"}/>
  </>;
}
export default Signature;
