import pandas as pd

df = pd.read_csv("netflix_list.csv")
df.to_json("netflix_list.json", orient="records", indent=2)

print("✅ JSON file created successfully")
