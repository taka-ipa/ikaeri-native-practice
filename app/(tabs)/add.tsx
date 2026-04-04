import { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddMatchScreen() {
  const [date, setDate] = useState("");
  const [rule, setRule] = useState("");
  const [stage, setStage] = useState("");
  const [weapon, setWeapon] = useState("");
  const [result, setResult] = useState<"WIN" | "LOSE" | "">("");

  const handleSave = () => {
    const formData = {
      date,
      rule,
      stage,
      weapon,
      result,
    };

    console.log("入力内容", formData);
    Alert.alert("保存確認", JSON.stringify(formData, null, 2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>試合を記録する</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>日付</Text>
          <TextInput
            style={styles.input}
            placeholder="例: 4/5"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>ルール</Text>
          <TextInput
            style={styles.input}
            placeholder="例: ガチエリア"
            value={rule}
            onChangeText={setRule}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>ステージ</Text>
          <TextInput
            style={styles.input}
            placeholder="例: ネギトロ"
            value={stage}
            onChangeText={setStage}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>武器</Text>
          <TextInput
            style={styles.input}
            placeholder="例: スプラマニューバー"
            value={weapon}
            onChangeText={setWeapon}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>結果</Text>
          <View style={styles.resultRow}>
            <Pressable
              style={[
                styles.resultButton,
                result === "WIN" && styles.selectedButton,
              ]}
              onPress={() => setResult("WIN")}
            >
              <Text
                style={[
                  styles.resultButtonText,
                  result === "WIN" && styles.selectedButtonText,
                ]}
              >
                WIN
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.resultButton,
                result === "LOSE" && styles.selectedButton,
              ]}
              onPress={() => setResult("LOSE")}
            >
              <Text
                style={[
                  styles.resultButtonText,
                  result === "LOSE" && styles.selectedButtonText,
                ]}
              >
                LOSE
              </Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>保存する</Text>
        </Pressable>
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
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 8,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  resultRow: {
    flexDirection: "row",
    gap: 12,
  },
  resultButton: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#222",
    borderColor: "#222",
  },
  resultButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
  },
  selectedButtonText: {
    color: "#fff",
  },
  saveButton: {
    backgroundColor: "#222",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
