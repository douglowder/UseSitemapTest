import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Href, useRouter, useSitemap, type SitemapType } from 'expo-router';

export default function SitemapScreen() {
  const sitemap = useSitemap();
  console.log(JSON.stringify(sitemap, null, 2));
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sitemap</ThemedText>
      </ThemedView>
      {sitemap && <SitemapNode node={sitemap} />}
    </ParallaxScrollView>
  );
}

function SitemapNode(props: { node: SitemapType }) {
  const { node } = props;
  const router = useRouter();
  if (node.isVirtual) return null;
  return (
    <ThemedView style={styles.sitemapNode}>
      {node.children.length > 0 ? (
        <ThemedText>{node.filename}</ThemedText>
      ) : (
        <Pressable onPress={() => router.navigate(node.href as Href)}>
          <ThemedText type="link">{node.filename}</ThemedText>
        </Pressable>
      )}
      <ThemedView style={styles.sitemapNodeChildrenWrapper}>
        <ThemedView style={styles.sitemapNodeChildrenSpacer} />
        <ThemedView style={styles.sitemapNodeChildren}>
          {props.node.children.map((child: any) => (
            <SitemapNode key={child.href} node={child} />
          ))}
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sitemapNode: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  sitemapNodeChildrenWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  },
  sitemapNodeChildrenSpacer: {
    width: 20,
    height: '100%',
  },
  sitemapNodeChildren: {
    flex: 1,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
