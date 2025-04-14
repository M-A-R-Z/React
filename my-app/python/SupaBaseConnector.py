from supabase import create_client, Client


class SupaBaseConnector:
    def __init__(self):
        self.url = "https://gsdvdncrnkbzyxgorxhy.supabase.co"  # Replace with your Supabase URL
        self.key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzZHZkbmNybmtienl4Z29yeGh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0OTQzMzEsImV4cCI6MjA1OTA3MDMzMX0.flxa9kDPshnG_vqVA3-XkLvsRfsdefv0EeKQM1ic5Q8"  # Replace with your Supabase API key
        self.supabase: Client = create_client(self.url, self.key)

# Replace with your Supabase connection details
    def select_initial_data(self):
        response = self.supabase.table("initial_data").select("*").execute()
        return response.data

    def select_questions(self):
        response = self.supabase.table("questions").select("*").execute()
        return response.data

    def fetch_data(self):
        return self.select_initial_data()




