function telephoneCheck(str) {
  // Good luck!
  let re;
  re = /^1?\s?\d{3}[-\s]?\s?\d{3}[-\s]?\d{4}$/;
  let bool = re.test(str);
  if(bool) {
    console.log(bool);
    return bool;
  } else {
    re = /^^1?\s?(\((?=\d{3}\)))\d{3}[-\)\s]?\s?\d{3}\-/;
    let bool = re.test(str);
    console.log(bool);
    return bool;
  }
}

telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("(555) 555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 (555) 555-5555")
console.log('///') //false vals
telephoneCheck("555-5555");
telephoneCheck("1 555)555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(275)76227382");
telephoneCheck("(555)5(55?)-5555");