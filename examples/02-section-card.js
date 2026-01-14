import { SectionBuilder, MessageFlags } from "discord.js";

/**
 * Example 2: The "Section" (Embed Replacement)
 * * Sections are the workhorse of V2. They allow you to group text
 * alongside an interactive accessory (like a button) or a thumbnail.
 */
export async function sendProfileCard(channel) {
    const section = new SectionBuilder()
        // You can stack up to 3 text display components inside a section
        .addTextDisplayComponents(
            t => t.setContent("### 👤 User Profile"),
            t => t.setContent("> Click the button to view full stats.")
        )
        // Add a button directly to the right side of the text
        .setButtonAccessory(
            b => b.setCustomId("details_btn")
                 .setLabel("View Stats")
                 .setStyle(1) // Primary Style
        );

    await channel.send({
        components: [section],
        flags: MessageFlags.IsComponentsV2,
    });
}
