import { TextDisplayBuilder, MessageFlags } from "discord.js";

/**
 * Example 1: The "Hello World" of V2
 * * In V2, there is no "content" string. Even a basic chat message
 * is a "TextDisplay" component.
 */
export async function sendWelcomeMessage(interaction) {
    // 1. Build the text component
    // Note: You can use standard Markdown here like **bold** or # Headers
    const textComponent = new TextDisplayBuilder()
        .setContent("**Welcome** to Discord Components V2! 🚀");

    // 2. Send the reply
    await interaction.reply({
        components: [textComponent],
        // CRITICAL: This flag is required to enable V2 parsing
        flags: MessageFlags.IsComponentsV2,
    });
}
