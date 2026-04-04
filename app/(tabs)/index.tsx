import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { recentMatches } from "../data/matches";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>最近の試合</Text>

        {recentMatches.map((match) => (
          <Link
            key={match.id}
            href={{
              pathname: "/match/[id]",
              params: { id: String(match.id) },
            }}
            asChild
          >
            <Pressable style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.date}>{match.date}</Text>
                <Text
                  style={[
                    styles.result,
                    match.result === "WIN" ? styles.win : styles.lose,
                  ]}
                >
                  {match.result}
                </Text>
              </View>

              <Text style={styles.rule}>{match.rule}</Text>
              <Text style={styles.stage}>{match.stage}</Text>

              <View style={styles.ratingRow}>
                {match.ratings.map((rating, index) => (
                  <View key={index} style={styles.badge}>
                    <Text style={styles.badgeText}>{rating.value}</Text>
                  </View>
                ))}
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fc",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  result: {
    fontSize: 14,
    fontWeight: "700",
  },
  win: {
    color: "#2e8b57",
  },
  lose: {
    color: "#d9534f",
  },
  rule: {
    fontSize: 18,
    fontWeight: "700",
  },
  stage: {
    fontSize: 14,
    color: "#444",
  },
  ratingRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#eef1f6",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "700",
  },
});
