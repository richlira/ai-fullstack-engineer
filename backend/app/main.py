# backend/app/main.py
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app.database import get_db
from sqlalchemy import text

app = FastAPI(title="AI Fullstack API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "AI Fullstack API"}

@app.get("/health")
def health_check(db: Session = Depends(get_db)):
    try:
        # Test database connection
        db.execute(text("SELECT 1"))
        return {
            "status": "healthy",
            "database": "connected"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "database": "disconnected",
            "error": str(e)
        }

@app.get("/db-info")
def database_info(db: Session = Depends(get_db)):
    try:
        # Check pgvector
        result = db.execute(text("SELECT extversion FROM pg_extension WHERE extname='vector'"))
        pgvector_version = result.fetchone()
        
        # Count tables
        result = db.execute(text("""
            SELECT COUNT(*) 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
        """))
        table_count = result.fetchone()[0]
        
        return {
            "pgvector_version": pgvector_version[0] if pgvector_version else None,
            "tables_count": table_count,
            "connection": "successful"
        }
    except Exception as e:
        return {"error": str(e)}