const question1 = [
    {
      id: 1,
      lebel: "Date of Through Examination:",
      isDate:true,
      isNumber:false,
      isText:false,
      ansr: "",
    },
    {
      id: 2,
      lebel: "Date of Next Through Examination:",
      isDate:true,
      isNumber:false,
      isText:false,
      ansr: "",
    },
    {
      id: 3,
      lebel: "Job Order Number:",
      isDate:false,
      isNumber:true,
      isText:false,
      ansr: "",
    },
    {
      id: 4,
      lebel: "Date of report:",
      isDate:true,
      isNumber:false,
      isText:false,
      ansr: "",
    },
    {
      id: 5,
      lebel: "Equipment Serial No..:",
      isDate:false,
      isNumber:true,
      isText:false,
      ansr: "",
    },
    {
      id: 6,
      lebel: "Sticker No:",
      isDate:false,
      isNumber:true,
      isText:false,
      ansr: "",
    },
    {
      id: 7,
      lebel: "Certificate Number:",
      isDate:false,
      isNumber:true,
      isText:false,
      ansr: "",
    },
    {
      id: 8,
      lebel: "Ref.Standard:",
      isDate:false,
      isNumber:false,
      isText:true,
      ansr: "",
    },
    {
      id: 9,
      lebel: "Report Number:",
      isDate:false,
      isNumber:true,
      isText:false,
      ansr: "",
    },
    {
      id: 10,
      lebel:
        "Name and address of the client for whom the thorough examination was made:",
        isDate:false,
        isNumber:false,
        isText:true,
        ansr: "",
    },
    {
      id: 11,
      lebel:
        "Name and address of the client for whom the thorough examination was made:",
        isDate:false,
        isNumber:false,
        isText:true,
        ansr: "",
    },
  ];
  
  const question2 = [
      {
         id:12,
         lebel:"ID / S.NO:",
         isDate:false,
         isNumber:false,
         isText:true,
         ansr: "",
      },
      {
          id:13,
          lebel:"Description of Equipment:",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:14,
          lebel:"QTY:",
          isDate:false,
          isNumber:true,
          isText:false,
          ansr: "",
       },
       {
          id:15,
          lebel:"SWL:",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:16,
          lebel:"Date of Manufacturing:",
          isDate:true,
          isNumber:false,
          isText:false,
          ansr: "",
       },
       {
          id:17,
          lebel:"Date of last Inspection",
          isDate:true,
          isNumber:false,
          isText:false,
          ansr: "",
       },
       {
          id:18,
          lebel:"Identification of any part found to have a defect which is or could become a danger to persons of the defect:(If none state NONE):",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:19,
          lebel:"Is the above a defect which is of immediate danger to persons?",
          isDate:false,
          isNumber:false,
          isText:false,
          isbool:true,
          ansr: "",
       },
       {
          id:20,
          lebel:"Is the above a defect which is not yet but could become a danger to persons: (If YES state the date by when)",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:21,
          lebel:"Particulars of any repair, renewal or alteration required to remedy the defect identified above:",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:22,
          lebel:"Particularsof any tests carried out as part of the   examination: (If none state NONE)",
          isDate:false,
          isNumber:false,
          isText:true,
          ansr: "",
       },
       {
          id:23,
          lebel:"IS THIS EQUIPMENT FIT FOR PURPOSE?",
          isDate:false,
          isNumber:false,
          isText:false,
          isbool:true,
          ansr: "",
       },
  ];
  const question3 =[
      {
       id:24,
       lebel:"Certificate For:",
       isText:false,
       isSelect:true,
       isRedio:false,
       isCheck:false,
       ansr:''
      },
      {
        id:25,
        lebel:"Name & Qualifications of person making this report:",
        isText:true,
        isSelect:false,
        isRedio:false,
        isCheck:false,
        ansr:''
       },
       {
        id:26,
        lebel:"Name of authenticating this report:",
         isText:true,
         isSelect:false,
         isRedio:false,
         isCheck:false,
        ansr:''
       },
       {
        id:27,
        lebel:"Manufacture Name:",
        isText:true,
        isSelect:false,
        isRedio:false,
        isCheck:false,
        ansr:''
       },
       {
        id:28,
        lebel:"Model:",
        isText:true,
        isSelect:false,
        isRedio:false,
        isCheck:false,
        ansr:''
       },
       {
        id:29,
        lebel:"Type Of Inspection:",
        isText:false,
        isSelect:false,
        isRedio:true,
        isCheck:false,
        ansr:''
       },
       {
        id:30,
        lebel:"Load Test:",
        isText:true,
        isSelect:false,
        isRedio:false,
        isCheck:false,
        ansr:''
       },
       {
        id:31,
        lebel:"Was the thorough examination carried out:",
        isText:false,
        isSelect:false,
        isRedio:false,
        isCheck:true,
        ansr:''
       },
       {
        id:32,
        lebel:"Remarks:",
        isText:true,
        isSelect:false,
        isRedio:false,
        isCheck:false,
        ansr:''
       }
  ]
  const question4 =[
    {
      id:33,
      istext:true,
      ansr:''
    },
    {
      id:34,
      lebel:'CC',
      istext:false,
      ansr:''
    },
    {
      id:35,
      lebel:'BCC',
      istext:false,
      ansr:''
    },
    {
      id:36,
      Signature:'Signature',
      isSignature:true,
      istext:false
    }
  ]
  export { question1,question2,question3,question4};