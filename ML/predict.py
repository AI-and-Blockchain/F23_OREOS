import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler

df = pd.read_csv('Troy_Housing.csv')

features = ['description_beds', 'description_baths_consolidated', 'description_lot_sqft', 'description_sqft', 'list_price']
target = 'description_sold_price'

X = df[features]
y = df[target]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

model = LinearRegression()

model.fit(X_train_scaled, y_train)

y_pred = model.predict(X_test_scaled)

mse = mean_squared_error(y_test, y_pred)
print(f'Mean Squared Error: {mse}')

new_data = pd.DataFrame({
    'description_beds': [4],
    'description_baths_consolidated': [2],
    'description_lot_sqft': [1307],
    'description_sqft': [49000],
    'list_price': [600000]
})

new_data_scaled = scaler.transform(new_data)

predicted_price = model.predict(new_data_scaled)
print(f'Predicted Price: {predicted_price[0]}')
