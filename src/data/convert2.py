import pandas as pd

df = pd.read_csv("tmdb_5000_movies.csv")
df.to_json("tmdb_5000_movies.json", orient="records", indent=2)

print("✅ JSON file created successfully")