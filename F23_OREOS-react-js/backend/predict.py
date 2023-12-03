import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.compose import make_column_selector
from sklearn.compose import make_column_transformer
from sklearn.pipeline import make_pipeline
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
df = pd.read_csv('Troy_Housing.csv')

numerical_features = ['description_sqft', 'description_baths_consolidated', 'description_lot_sqft', 'description_beds']
categorical_features = ['location_address_state', 'location_county_name', 'location_address_city','description_type']
target = 'list_price'

X_train, X_test, y_train, y_test = train_test_split(df[numerical_features + categorical_features], df[target], test_size=0.2, random_state=42, shuffle=False)

numeric_transformer = StandardScaler()
categorical_transformer = OneHotEncoder(drop='first', handle_unknown='ignore')

preprocessor = make_column_transformer(
    (numeric_transformer, make_column_selector(dtype_include='number')),
    (categorical_transformer, make_column_selector(dtype_exclude='number'))
)

model = make_pipeline(preprocessor, LinearRegression())
model.fit(X_train, y_train)


@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.get_json()
        input_df = pd.DataFrame(input_data,index=[0])
        predictions = model.predict(input_df)

        return jsonify(predictions[0].tolist())
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)