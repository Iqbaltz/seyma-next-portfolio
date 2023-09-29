// ./deskStructure.js

import { HomeIcon } from "@sanity/icons";
import { defineUrlResolver, Iframe } from "sanity-plugin-iframe-pane";

export const myStructure = (S: any) =>
  S.list()
    .title("Panel")
    .items([
      S.listItem()
        .title("Pages")
        .child(
          S.list()
            .title("Website Pages")
            .items([
              S.listItem()
                .title("Home")
                .icon(HomeIcon)
                .child(
                  S.document()
                    .schemaType("home")
                    .documentId("home")
                    .views([
                      S.view.form(),
                      S.view
                        .component(Iframe)
                        .title("Preview")
                        .options({
                          url: defineUrlResolver({
                            base: `/api/preview`,
                          }),
                        }),
                    ])
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem: any) => !["home"].includes(listItem.getId())
      ),
    ]);
