import pandas as pd

df = pd.read_csv("netflix_titles.csv")
df.to_json("netflix_titles.json", orient="records", indent=2)

print("✅ JSON file created successfully")
