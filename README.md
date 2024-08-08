# Bedtime Storytime

<img width="1283" alt="image" src="https://github.com/user-attachments/assets/ba6f845d-8614-4014-801d-34847c55b7bd">

<img width="1282" alt="image" src="https://github.com/user-attachments/assets/05962432-cfc9-44a6-93bd-ce52267af935">

Write a bedtime story using RedwoodJS and AI.

Start writing a story by picking

* a style (spooky, colorful, adventurous ...)
* an animal (penguin, mouse, unicorn, whale ...)
* a color for the animal
* and an activity (befriends aliens, goes to the doctor, rides a rollercoaster, bakes a cake for friends)

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

⌘ Langbase is the composable infrastructure and developer experience to build, collaborate, and deploy any AI apps/features. Our mission is to make AI accessible to everyone, any developer not just AI/ML experts. We are the only composable AI infrastructure.

Uses [Pipes](https://langbase.com/docs/pipe/overview) for composable prompts.

The [Story Writer Pipe](https://langbase.com/dthyresson/bedtime-story-writer) generates the story and the [Picture Pipe](https://langbase.com/dthyresson/bedtime-story-picture) generates the the descriptive instructions to generate the picture. We'll send that to Fal to generate the picture.

You'll need to fork these Pipes to use them.

## Fal

[fal](https://fal.ai/) powers the AI image generation.

Uses the [Fal API](https://fal.ai/docs/api/introduction) to generate the picture.

Currently using the [FLUX.1 [schnell]](https://fal.ai/models/fal-ai/flux/schnell) model.

## Unkey and Rate Limiting

To prevent abuse of the operations that call AI, uses [Unkey ratelimit](https://www.unkey.com/docs/ratelimiting/introduction) and a custom validator directive: `@rateLimited(identifier: "createStory")`

## Data Models

* Adjective - story style
* Animal - the hero of th story
* Color - because purple pandas are cute
* Activity - what happens
* Story - the story we save with the title, summary, description and picture

## Third Party Services and API Keys

You'll need API keys for Langbase, Unkey and Fal.

```env
FAL_KEY =
BEDTIME_STORY_WRITER_PIPE_API_KEY =
BEDTIME_STORY_PICTURE_PIPE_API_KEY =
UNKEY_ROOT_KEY =
UNKEY_NAMESPACE =
```

## Database

Uses SQLite for the database.

If you want to backup the database, run `yarn rw exec db_backup`

You can also restore the database by unzipping the backup file in the `exports/backups` directory and replacing the `db/dev.db` file.

## Scripts

Handy scripts:

* `yarn rw exec seed` seed animals, adjectives, activities and colors
* `yarn rw exec db_backup` backup sqlite db
* `yarn rw exec csv` export db data to csv
