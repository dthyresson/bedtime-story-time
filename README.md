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

## Langbase

⌘ Langbase helps developers ship composable hyper-personalized AI apps and features.

Start by building AI assistants Pipes Then create managed semantic memory (RAG) so your AI can talk to your data

⌘ Langbase is the composable infrastructure and developer experience to build, collaborate, and deploy any AI apps/features. Our mission is to make AI accessible to everyone, any developer not just AI/ML experts. We are the only composable AI infrastructure.

Uses a [Pipe](https://langbase.com/docs/pipe/overview) for prompts to generte the story and the descriptive instructions to generate to picture.

## Fal

Uses [fal}(https://fal.ai/) to generate the story picture.

## RateLimiting

To prevent abuse of the operations that call AI, uses [Unkey ratelimit](https://www.unkey.com/docs/ratelimiting/introduction) and a custom validator directive: `@rateLimited(identifier: "createStory")`

## Data Models

* Adjective - story style
* Animal - the hero of th story
* Color - because purple pandas are cute
* Activity - what happens
* Story - the story we save with the title, summary, description and picture

## Services and API KEYS

You'll need API keys for Langbase, Unkey and Fal.

```env
FAL_KEY =
BEDTIME_STORY_WRITER_PIPE_API_KEY =
BEDTIME_STORY_PICTURE_PIPE_API_KEY =
UNKEY_ROOT_KEY =
```
