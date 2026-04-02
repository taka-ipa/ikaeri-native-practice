import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const recentMatches = [
  { id: 1, date: "3/31", result: "○△" },
  { id: 2, date: "3/30", result: "△×" },
  { id: 3, date: "3/29", result: "○○" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>今日のふりかえり</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>今日の課題</Text>
          <Text style={styles.task}>・初弾を当てる</Text>
          <Text style={styles.task}>・無駄デスを減らす</Text>
        </View>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>試合を追加</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>最近の記録</Text>
          {recentMatches.map((match) => (
            <View key={match.id} style={styles.matchRow}>
              <Text style={styles.matchDate}>{match.date}</Text>
              <Text style={styles.matchResult}>{match.result}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  task: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  matchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  matchDate: {
    fontSize: 16,
  },
  matchResult: {
    fontSize: 16,
    fontWeight: "600",
  },
});
