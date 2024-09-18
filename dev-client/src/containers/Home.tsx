import { Button } from "@mui/material";

import { useTranslation } from 'react-i18next'

const Home = () => {

  const { t, i18n } = useTranslation();

  const changeLang = (lang: any) => {
    i18n.changeLanguage(lang)
  }
  // const handleButton = async() => {
  //   const result = await Parse.Cloud.run("sum",{ a: 4, b: 5});
  //   console.log('result: ', result);
  // }

  return (
    <div css={{ minHeight: "100vh", position: "relative" }} className="flexColumn">

      <Button onClick={() => changeLang("en")}>  
        en
      </Button>
      <Button onClick={() => changeLang("fr")}>  
        fr
      </Button>
      <div>
        {t("header")}
      </div>
    </div>
  )
}

export default Home