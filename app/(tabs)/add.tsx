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

const tasks = [
  { id: 1, title: "初弾を当てる" },
  { id: 2, title: "無駄デスを減らす" },
  { id: 3, title: "人数有利で前に出る" },
];

export default function AddMatchScreen() {
  const [date, setDate] = useState("");
  const [rule, setRule] = useState("");
  const [stage, setStage] = useState("");
  const [weapon, setWeapon] = useState("");
  const [result, setResult] = useState<"WIN" | "LOSE" | "">("");
  const [ratings, setRatings] = useState<{
    [taskId: number]: "○" | "△" | "×";
  }>({});
  const [note, setNote] = useState("");

  const handleRating = (taskId: number, value: "○" | "△" | "×") => {
    setRatings((prev) => ({
      ...prev,
      [taskId]: value,
    }));
  };

  const handleSave = () => {
    console.log("保存ボタン押された");
    console.log({ date, rule, stage, weapon, result, ratings });

    // if (!date || !rule || !stage || !weapon || !result) {
    //   Alert.alert("入力エラー", "必須項目を入力してください");
    //   return;
    // }

    const hasAllRatings = tasks.every((task) => ratings[task.id]);
    if (!hasAllRatings) {
      console.log("すべての課題を評価してください。");
      return;
    }

    const formData = {
      date,
      rule,
      stage,
      weapon,
      result,
      ratings,
      note,
    };

    console.log("入力内容", formData);
    Alert.alert("保存確認", JSON.stringify(formData, null, 2));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>試合を記録する</Text>

        {/* 日付 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>日付</Text>
          <TextInput
            style={styles.input}
            placeholder="例: 4/5"
            value={date}
            onChangeText={setDate}
          />
        </View>

        {/* ルール */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>ルール</Text>
          <TextInput
            style={styles.input}
            placeholder="例: ガチエリア"
            value={rule}
            onChangeText={setRule}
          />
        </View>

        {/* ステージ */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>ステージ</Text>
          <TextInput
            style={styles.input}
            placeholder="例: ネギトロ"
            value={stage}
            onChangeText={setStage}
          />
        </View>

        {/* 武器 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>武器</Text>
          <TextInput
            style={styles.input}
            placeholder="例: スプラマニューバー"
            value={weapon}
            onChangeText={setWeapon}
          />
        </View>

        {/* 勝敗 */}
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

        {/* 課題評価 */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>課題評価</Text>

          {tasks.map((task) => (
            <View key={task.id} style={styles.taskRow}>
              <Text style={styles.taskTitle}>{task.title}</Text>

              <View style={styles.resultRow}>
                {["○", "△", "×"].map((item) => (
                  <Pressable
                    key={item}
                    style={[
                      styles.resultButton,
                      ratings[task.id] === item && styles.selectedButton,
                    ]}
                    onPress={() =>
                      handleRating(task.id, item as "○" | "△" | "×")
                    }
                  >
                    <Text
                      style={[
                        styles.resultButtonText,
                        ratings[task.id] === item && styles.selectedButtonText,
                      ]}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* メモ */}
        <View style={styles.formGroup}>
          <Text style={styles.label}>メモ</Text>
          <TextInput
            style={[styles.input, styles.memoInput]}
            placeholder="例: 初動よかったけど終盤の打開が遅かった"
            value={note}
            onChangeText={setNote}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* 保存ボタン */}
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
  memoInput: {
    minHeight: 100,
  },
  taskRow: {
    gap: 8,
    marginBottom: 12,
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
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
