import {
    ContainerBuilder,
    SectionBuilder,
    SeparatorBuilder,
    TextDisplayBuilder,
    MediaGalleryBuilder,
    MessageFlags
} from "discord.js";

/**
 * Example 3: Complex Dashboard
 * * Using a "Container" to group multiple different component types
 * into a single cohesive layout. This counts as nested components.
 */
export async function sendDashboard(interaction) {
    // The Container holds the entire structure
    const dashboardContainer = new ContainerBuilder()
        .addComponents(
            // Top Header Section
            new SectionBuilder()
                .addTextDisplayComponents(
                    t => t.setContent("# 📢 Monthly Update"),
                    t => t.setContent("Here are the highlights for January.")
                ),

            // A visual divider
            new SeparatorBuilder(),

            // Image Gallery (Replaces message attachments)
            // Note: You shouldn't attach files loosely anymore
            new MediaGalleryBuilder().addImages([
                "https://cdn.example.com/chart1.png",
                "https://cdn.example.com/chart2.png"
            ]),

            // Footer Text
            new TextDisplayBuilder().setContent("End of report.")
        );

    await interaction.reply({
        components: [dashboardContainer],
        flags: MessageFlags.IsComponentsV2,
    });
}
