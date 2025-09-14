import { useState } from 'react'
import './App.css'
import { Container, TextField, Typography, Box, FormControl, InputLabel, Select, MenuItem, Button, CircularProgress } from '@mui/material';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
    } catch (error) {
      setError('Failed to generate email reply, please try again');
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* App Header */}
      <header className="app-header">
        <div className="app-logo">ReplyWise</div>
        <div className="app-tagline">Your Smart Email Assistant</div>
      </header>

      {/* Main App Card */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Generate Professional Replies in Seconds
        </Typography>

        <Box sx={{ mx: 3 }}>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant='outlined'
            label="Paste Your Email Here"
            value={emailContent || ''}
            onChange={(e) => setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="genz">Gen Z</MenuItem>
              <MenuItem value="gigaChad">Confident</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant='contained'
            onClick={handleSubmit}
            disabled={!emailContent || loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color='error'>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box className="generated-reply-box">
            <Typography variant='h6' gutterBottom>
              Generated Reply
            </Typography>

            <TextField
              fullWidth
              multiline
              rows={6}
              variant='outlined'
              value={generatedReply || ''}
              inputProps={{ readOnly: true }}
            />

            <Button
              variant='outlined'
              sx={{ mt: 2, display: "block", mx: "auto" }}
              onClick={() => navigator.clipboard.writeText(generatedReply)}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Container>
      {/* Developer Info */}
<Box className="developer-info">
  <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>Developed by Peeyush</Typography>
  <Box sx={{ display: 'flex', gap: 1 }}>
    <a href="https://github.com/i-peeyush" target="_blank" rel="noopener noreferrer" className="dev-link">
      <img src="/github-icon.png" alt="GitHub" className="dev-icon" /> GitHub
    </a>
    <a href="https://www.linkedin.com/in/ipeeyush/" target="_blank" rel="noopener noreferrer" className="dev-link">
      <img src="/linkedin-icon.png" alt="LinkedIn" className="dev-icon" /> LinkedIn
    </a>
  </Box>
</Box>


    </>
  )
  
}

export default App;
