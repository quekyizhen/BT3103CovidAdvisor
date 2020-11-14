import pandas as pd

data = pd.read_csv('./new-cases-per-day-covid-19.csv')  # input file name

print(data.to_json())  # just to see output

data.to_json('parsed_daily.json')  # output file name
