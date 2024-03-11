import LocalizedStrings from "react-localization";

const dictionaries = new LocalizedStrings({
  id: {
    helloWorld: "Halo Dunia",
    test: "test indo",
  },
  en: {
    helloWorld: "Hello World",
    test: "test english",
  }
})

export default dictionaries