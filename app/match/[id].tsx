import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { recentMatches } from "../data/matches";

export default function MatchDetailScreen() {
  const { id } = useLocalSearchParams();

  const match = recentMatches.find((item) => item.id === Number(id));

  if (!match) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>試合が見つかりませんでした</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>試合詳細</Text>

        <View style={styles.card}>
          <View style={styles.headerRow}>
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

          <DetailRow label="ルール" value={match.rule} />
          <DetailRow label="ステージ" value={match.stage} />
          <DetailRow label="武器" value={match.weapon} />

          <View style={styles.noteBox}>
            <Text style={styles.sectionTitle}>メモ</Text>
            <Text style={styles.noteText}>{match.note}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>課題評価</Text>

          {match.ratings.map((rating, index) => (
            <View key={index} style={styles.ratingItem}>
              <Text style={styles.taskText}>{rating.task}</Text>
              <View style={styles.ratingBadge}>
                <Text style={styles.ratingBadgeText}>{rating.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f8fc",
  },
  content: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#666",
  },
  result: {
    fontSize: 16,
    fontWeight: "700",
  },
  win: {
    color: "#2e8b57",
  },
  lose: {
    color: "#d9534f",
  },
  detailRow: {
    gap: 4,
  },
  detailLabel: {
    fontSize: 13,
    color: "#666",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  noteBox: {
    marginTop: 8,
    gap: 8,
  },
  noteText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
  ratingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  taskText: {
    flex: 1,
    fontSize: 15,
    color: "#222",
    paddingRight: 12,
  },
  ratingBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#eef1f6",
    alignItems: "center",
    justifyContent: "center",
  },
  ratingBadgeText: {
    fontSize: 16,
    fontWeight: "700",
  },
  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundText: {
    fontSize: 16,
    color: "#666",
  },
});
