import pandas as pd

data = pd.read_csv('./sgcovid19.csv')  # input file name

print(data.to_json())  # just to see output

data.to_json('parsed.json')  # output file name
