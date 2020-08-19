import requests

r = requests.get('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')

data = r.json()

free = data['free']
l = []
for item in free:
    i = lambda x,y: any(x==i['conference_id'] for i in y)
    if not i(item['conference_id'], l):
        l.append(item)

print(len(free), len(l))

for item in free:
	for key,value in item.items():
		if key == "confName" or key == "city" or key == "country" or key == "venue" or key == "entryType":
			print(value, end= " ")
			print("\r")

