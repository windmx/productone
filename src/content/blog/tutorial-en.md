---
draft: false
title: "How to install Notion AI plugin for Mac or Windows Notion App?"
publishDate: "2022-11-07T15:39:36.050Z"
image: "https://ainew.world/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F1739f6b6-5b86-4c9a-93b1-11e9049c7339%2Fb808cd23-444b-4ff8-8969-d2835cc3e012%2F900.506__2023-07-1322_57_49.jpeg?table=block&id=df2b92bf-2396-4482-831f-b4f274e5e90a&spaceId=1739f6b6-5b86-4c9a-93b1-11e9049c7339&width=1800&userId=&cache=v2"
category: "Tutorials"
author: "Landrop"
tags: [NotionAI, Notion, Mac, Windows, Tutorials]
lang: "en"
---

<!-- How to install Notion AI plugin for Mac or Windows Notion App?  -->

## For Mac Notion App

- Download the plugin [Notion AI for Windows｜Mac.zip](https://www.notion.so/Notion-AI-for-Windows-Mac-2a3131b786a84a90adaf398bc6685fe2#bd62004532044428aa0f7cfd335db888) and **unzip** it.
- Open **Finder**, click on **Applications**, find **Notion**, right-click on the **Notion icon**, select **Show Package Contents**, then click on the **Resources** folder, then click on the **app** folder, and finally click on the **renderer** folder.
- Drag the unzipped **notion-ai.js** and **notion-data.js** files into the **renderer** folder.
- Right-click on the *preload.js* file, open it with "Text Edit", and add the following code to the first line: **require("./notion-ai")**
- Restart **Notion app** and you're good to go!


## For Windows Notion App

- Download the plugin [Notion AI for Windows｜Mac.zip](https://www.notion.so/Notion-AI-for-Windows-Mac-2a3131b786a84a90adaf398bc6685fe2#bd62004532044428aa0f7cfd335db888) and **unzip** it.
- Right-click on the ***Notion*** icon on the desktop and click on *Open file location*.
- Then click on the **Resources** folder, followed by the **app** folder, and finally click on the **renderer** folder.
- Drag the unzipped **notion-ai.js** and **notion-data.js** files into the **renderer** folder.
- Right-click on the *preload.js* file, select "Open with" and choose *Notepad*🗒️. Add the following code to the first line: **require("./notion-ai")** and save.
- Restart **Notion app** to use the plugin!


