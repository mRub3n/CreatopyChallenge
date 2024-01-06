import { useState, useEffect, use } from 'react';
import styled from 'styled-components';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

const CostumingTemplates = (props) => {
  const [currentImage, setImage] = useState(props.imageurl);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            max_tokens: 80,
            messages: [
              {
                role: 'user',
                content: `Generate ${text.promptText} with title followed by " - " and a short description`,
              },
            ],
            temperature: 0.7,
          }),
        }
      );

      const result = await response.json();

      const messageContent = result.choices?.[0]?.message?.content;

      const [title, description] = messageContent.split(' - ');

      console.log('Title:', title);
      console.log('Description:', description);

      setText((preValue) => {
        return {
          ...preValue,
          title: title,
          description: description,
        };
      });
    } catch (error) {
      console.error('Error:', error);
    }

    if (text.promptImage) {
      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer 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',
            'User-Agent': 'Chrome',
          },
          body: JSON.stringify({
            prompt: 'a tiny house in the mountains',
            n: 1,
            size: '512x512',
          }),
        }
      );

      let data = await response.json();
      let data_array = data.data;
      let image_url = data_array[0].url;
      setImage(image_url);
    }
  };

  var defaultDimensions = {
    titleTop: '5%;',
    descriptionTop: '35%;',
    titleInlineSize: '38%;',
    descriptionInlineSize: '43%;',
  };

  props.title === 'Story' &&
    (defaultDimensions = {
      titleTop: '58%;',
      descriptionTop: '78%;',
      titleInlineSize: '88%;',
      descriptionInlineSize: '92%;',
    });

  const Title = styled.div`
  position: absolute;
  top: ${defaultDimensions.titleTop}
  left: 5%;
  font-size: 24px;
  inline-size: ${defaultDimensions.titleInlineSize}
  overflow-wrap: break-word;
`;

  const Description = styled.div`
  position: absolute;
  top: ${defaultDimensions.descriptionTop}
  left: 16px;
  inline-size: ${defaultDimensions.descriptionInlineSize}
  overflow-wrap: break-word;
`;

  const [text, setText] = useState({
    title: '',
    description: '',
    promptText: '',
    promptImage: null,
  });

  function handleChange(event: any) {
    const { value, name } = event.target;
    console.log(text);

    setText((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  return (
    <SidebarContainer onChange={handleChange}>
      <SidebarContent>
        <InputLabel>Generate Titles and Descriptions with AI</InputLabel>
        <SidebarPromptArea
          name="promptText"
          placeholder="eg. An ad about airline"
        ></SidebarPromptArea>
        <GenerateButton onClick={handleSubmit}>Generate</GenerateButton>

        <InputLabel>Title:</InputLabel>
        <SidebarTextInput
          name="title"
          value={text.title}
          type="text"
          placeholder="Edit title"
        />
        <InputLabel>Description:</InputLabel>
        <SidebarTextArea
          name="description"
          value={text.description}
          placeholder="Edit description"
        ></SidebarTextArea>
        <InputLabel>Image:</InputLabel>
        <SidebarPromptArea
          name="promptImage"
          value={text.promptImage}
          placeholder="Enter the propmpt for AI image generator"
        ></SidebarPromptArea>
      </SidebarContent>
      <ImageContainer>
        <ImageComponents>
          <StyledIMG src={currentImage} alt="Placeholder" />
          <TextOutputContainer>
            <Title>{text.title}</Title>
            <Description>{text.description}</Description>
            <CTAbutton
              onClick={() => {
                alert('CTA (call to action) button CLICKED!');
              }}
            >
              Try now
            </CTAbutton>
          </TextOutputContainer>
        </ImageComponents>
      </ImageContainer>
    </SidebarContainer>
  );
};

const CTAbutton = styled.button`
position: absolute;
bottom: 5%;
right: 5%;
padding: 0px 28px;
height: 38px;
white-space: nowrap;
text-align: center;
background-color: #fff;
border: 2px solid #000;
border-radius: 24px;
font-family: "Segoe UI", Tahoma, sans-serif;
`;

const SidebarPromptArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 14px;
  border: 3px solid #71A597;
  border-radius: 4px;
  box-sizing: border-box;
`;

const StyledIMG = styled.img`
  max-height: 700px;
  max-width: 700px;
  @media only screen and (max-width: 600px) {
    max-width: 600px;
  }
 `;

const TextOutputContainer = styled.div`
width: 5%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 text-align: center;
 
 //here is set the text color
 color: white;
 font-size: 20px;
 text-shadow:
     0.07em 0 black,
     0 0.07em black,
     -0.07em 0 black,
     0 -0.07em black;
 `;

const ImageComponents = styled.div`
 position: relative;
 text-align: center;
 color: white;
 `;

const ImageContainer = styled.div`
 flex: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 `;

const SidebarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    width: 100vw;
  }
`;

const SidebarContent = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  
`;

const InputLabel = styled.label`
  padding-top: 15px;
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
  color: #333;
`;

const SidebarTextInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
`;

const SidebarTextArea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  font-size: 14px;
  border: 2px solid black;
  border-radius: 4px;
  box-sizing: border-box;
`;

const GenerateButton = styled.p`
  padding: 10px;
  text-align: center; 
  background-color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 3px solid #71A597;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  a {
    text-decoration: none;
    color: #2E3138;
  }

  &:hover {
    a {
      text-decoration: none;
      color: #f9f9f9;
    }
    color: rgb(0, 0, 0);
    background-color: #71A597;
    color: #000;
    border-color: transparent;
  }
`;

export default CostumingTemplates;
