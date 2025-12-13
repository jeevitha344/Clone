import pandas as pd

df = pd.read_csv("movies.csv")
df.to_json("movies.json", orient="records", indent=2)

print("✅ JSON file created successfully")