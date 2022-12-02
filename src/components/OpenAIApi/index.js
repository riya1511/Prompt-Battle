import { Configuration, OpenAIApi } from 'openai';


const checkResponse = async (apiKey , setClassName) => {
    try{
        const openAiConfig = new Configuration({apiKey : apiKey});
        const openAi = new OpenAIApi(openAiConfig);
        const response = await openAi.createImage({
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
        })
        if(response.data.data.length === 1){
            setClassName(prevVal => ([prevVal[0],'is-valid',prevVal[2]]));
            return true;
        }
    }
    catch(e){
        setClassName(prevVal => ([prevVal[0],'is-invalid',prevVal[2]]))
        return false;
    }
}

export {checkResponse};