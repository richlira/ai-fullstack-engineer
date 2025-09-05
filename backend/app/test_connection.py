# backend/app/test_connection.py
from app.database import engine 
from sqlalchemy import text

def test_connection():
    try:
        with engine.connect() as conn:
            # Test básico de conexión
            result = conn.execute(text("SELECT 1"))
            print("✅ Conexión exitosa a PostgreSQL")
            
            # Verificar pgvector
            result = conn.execute(text("SELECT extversion FROM pg_extension WHERE extname='vector'"))
            version = result.fetchone()
            if version:
                print(f"✅ pgvector instalado - versión: {version[0]}")
            else:
                print("⚠️ pgvector no está instalado")
            
            # Verificar tablas
            result = conn.execute(text("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public'
            """))
            tables = result.fetchall()
            print(f"✅ Tablas encontradas: {[table[0] for table in tables]}")
            
    except Exception as e:
        print(f"❌ Error de conexión: {e}")

if __name__ == "__main__":
    test_connection()