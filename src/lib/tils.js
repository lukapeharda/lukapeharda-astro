import { renderMarkdown } from '@astrojs/markdown-remark';
import H1 from '../components/articles/H1.astro';
import H2 from '../components/articles/H2.astro';
import Link from '../components/articles/Link.astro';
import Strong from '../components/articles/Strong.astro';
import Divider from '../components/Divider.astro';
import Emphasis from '../components/articles/Emphasis.astro';
import Paragraph from '../components/articles/Paragraph.astro';

function findLinkInTokens(tokens) {
    for (const token of tokens) {
      if (token.type === 'link') {
        return token;
      }
      // If the token has nested tokens, search those too
      if (token.tokens) {
        const nestedLink = findLinkInTokens(token.tokens);
        if (nestedLink) return nestedLink;
      }
    }
    return null;
  }

export function parseMarkdownGroups(tokens) {
    const groups = [];
    let currentGroup = null;

    tokens.forEach((token) => {
        if (token.type === 'heading' && token.depth === 2) {
            if (currentGroup) {
                groups.push(currentGroup);
            }

            currentGroup = {
                heading: token.text,
                items: []
            };
        } else if (token.type === 'list' && currentGroup) {
            token.items.forEach(item => {
              const linkToken = findLinkInTokens(item.tokens);
              if (linkToken) {
                currentGroup.items.push({
                  title: linkToken.text,
                  url: linkToken.href,
                  // Convert GitHub URL to raw URL
                  slug: linkToken.href
                    .split('/')
                    .pop()
                    ?.replace('.md', '') || ''
                });
              }
            });
        }
    });

    // Don't forget to add the last group
    if (currentGroup) {
        groups.push(currentGroup);
    }

    return groups;
}

export async function processContent(markdownContent) {
    const { code } = await renderMarkdown(markdownContent, {
        // Enable syntax highlighting
        syntaxHighlight: 'shiki',
        // Optional: configure shiki theme
        shikiConfig: {
            theme: 'github-dark',
            // Optional: wrap lines that overflow
            wrap: true
        },
        components: {
            a: Link,
            p: Paragraph,
            em: Emphasis,
            h1: H1,
            h2: H2,
            hr: Divider,
            strong: Strong
        }
    });

    return code;
}