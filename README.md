# Discord Components V2 Guide

A practical reference for migrating to Discord's **Components V2** system. This repository demonstrates how to build modular, flexible messages using the new component architecture.

## 🚨 Key Changes & Requirements

Before using the examples, understand these core rules:

1.  **The V2 Flag is Mandatory:** You must include the `MessageFlags.IsComponentsV2` flag in every payload, or Discord will ignore the new components.
2.  **Legacy Fields are Gone:** You cannot use `content`, `embeds`, `stickers`, or `poll` when the V2 flag is active. Everything must be inside the `components` array.
3.  **Limits:**
    * **40 Components** max per message (including nested ones).
    * **4,000 Characters** max across all text components.
# DISCORD COMPONENT V2

## 📦 Component Types

| Component | Description |
| :--- | :--- |
| **Container** | Wrapper for grouping other components (allows nesting). |
| **Section** | Groups text (1-3 lines) with an accessory (button/thumbnail). |
| **Text Display** | Markdown text block (replaces `content`). |
| **Media Gallery** | Grid or list of images (replaces `attachments`). |
| **Separator** | Visual divider line. |

## 🛠️ Usage

Check the `/examples` folder for specific implementations:

* `01-basic-text.js`: Sending simple messages without the old `content` field.
* `02-section-card.js`: Replacing Embeds with Sections.
* `03-complex-dashboard.js`: Advanced layouts using Containers and Media Galleries.

## Resources
* [Official Discord Change Log][2]
* [Discord.js Component Guide][7]

[2]: https://discord.com/developers/docs/change-log/2025-04-22-components-v2
[7]: https://discordjs.guide/popular-topics/display-components
