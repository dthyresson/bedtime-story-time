# Bedtime Storytime

<img width="1282" alt="image" src="https://github.com/user-attachments/assets/766e9682-8cdf-431d-9f45-446f7f7e76f4">

Write a bedtime strory using RedwoodJS and AI.

Start writing a story by picking

* a style (spooky, colorful, adventurous ...)
* an animal (penguin, mouse, unicorn, whale ...)
* a color for the animal
* and activity (befriends aliens, goes to the doctor, rides a rollercoaster, bakes a cake for friends)

It uses Langbase and OpenAI to write a children's bedtime story

* title
* summary
* story

for a "fantastical story about a green whale who rides the bus" or the "spooky story about the tomato fox who explores a cave".

Then using the summary, Langbase and OpenAI generates another prompt to describe the instructions to generate a children's story book image.

That description sent to Fal to generate an image.

Stories get saved to `stories` in SQLite for viewing, searching and maybe sharing.

You then get a bedtime story to enjoy!

## Data Models

* Adjective - story style
* Animal - the hero of th story
* Color - because purple pandas are cute
* Activity - what happens
* Story - the story we save with the title, summary, description and picture
