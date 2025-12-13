import pandas as pd

df = pd.read_csv("NetFlix.csv")
df.to_json("NetFlix.json", orient="records", indent=2)

print("✅ JSON file created successfully")