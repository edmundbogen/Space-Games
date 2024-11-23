# Function to estimate monthly home expenses
def home_bills_estimate():
    # Hard-coded values for bills
    bills = {
        'electricity_estimate': 500,
        'sam_car': 1200,
        'water_bill': 90,
        'sophie_dorm': 2100,
        'st_andrews_cc': 5000,
        'sam_amex': 12000,
        'mortgage': 4800,
        'health_insurance': 3000,
        'car_insurance': 1000,
        'maid_service': 1000,
        'other_subscriptions': 1000,
        'ac_debt': 1000,
        'edmund_drugs': 1100,
        'sam_drugs': 1100
    }
    # Calculate the total owed
    return sum(bills.values())


# Function to estimate monthly business expenses
def work_bills_estimate():
    # Hard-coded values for work bills
    bills = {
        'ra_payroll': 1500,
        'nicole_payroll': 2300,
        'mercedes_eqs450': 1160,
        'followup_boss': 275,
        'constant_contact': 160,
        'mid_journey': 30,
        'chat_gpt': 70,
        'claude': 30,
        'perplexity': 20,
        'phone': 340,
        'marketing': 2000,
        'travel': 2000,
        'misc': 1000,
        'eleven_labs': 5,
        'canva': 15,
        'web_sites_est': 400,
        'kajabi': 200,
        'zoom': 15,
        'dropbox': 12,
        'real_grader': 15,
        'heygen': 30,
        'groupkit': 48
    }
    # Calculate the total work owed
    return sum(bills.values())


# Function to estimate monthly revenue
def revenue():
    # Hard-coded values for revenue
    earnings = {
        'sam': 10000,
        'edmund': 45000,
        'investment': 12500
    }
    # Calculate the total earned
    return sum(earnings.values())


# Print the total bills owed
print(f"Total home bills owed: {home_bills_estimate()}")
print(f"Total work bills owed: {work_bills_estimate()}")

# Calculate and print total combined expenses
total_combined = home_bills_estimate() + work_bills_estimate()
print(f"Total combined home and work bills owed: {total_combined}")

# Print the total revenue earned
print(f"Total revenue earned: {revenue()}")

remainder = revenue() - total_combined
print(f"Remaining revenue - expenses: {remainder}")

