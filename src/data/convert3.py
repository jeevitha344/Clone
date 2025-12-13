import pandas as pd

df = pd.read_csv("tmdb_5000_credits.csv")
df.to_json("tmdb_5000_credits.json", orient="records", indent=2)

print("✅ JSON file created successfully")