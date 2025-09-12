import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

const mockRichText = (text) => ({
  nodeType: 'document',
  data: {},
  content: [
    {
      nodeType: 'paragraph',
      data: {},
      content: [
        {
          nodeType: 'text',
          value: text,
          marks: [],
          data: {},
        },
      ],
    },
  ],
});

// Mock the contentful client
vi.doMock('../../utils/contentful', () => ({
  contentfulClient: {
    getEntries: vi.fn().mockResolvedValue({
      items: [
        {
          fields: {
            name: 'PM',
            description: mockRichText('Project Management'),
            skills: mockRichText('Organizing, Planning'),
            leads: [],
          },
        },
        {
          fields: {
            name: 'CAD',
            description: mockRichText('Computer-Aided Design'),
            skills: mockRichText('SolidWorks, Fusion 360'),
            leads: [],
          },
        },
      ],
    }),
  },
}));

// Mock the background components
vi.mock('../ui/backgrounds/Waves', () => ({ default: () => <div>Waves</div> }));
vi.mock('../ui/backgrounds/Beams', () => ({ default: () => <div>Beams</div> }));
vi.mock('../ui/backgrounds/LetterGlitch', () => ({ default: () => <div>LetterGlitch</div> }));
vi.mock('../ui/backgrounds/Lightning', () => ({ default: () => <div>Lightning</div> }));
vi.mock('../ui/backgrounds/BallPit', () => ({ default: () => <div>BallPit</div> }));
vi.mock('../ui/backgrounds/Squares', () => ({ default: () => <div>Squares</div> }));
vi.mock('../ui/backgrounds/DotGrid', () => ({ default: () => <div>DotGrid</div> }));

describe('SubteamSection', () => {
  let SubteamSection;

  beforeEach(async () => {
    const module = await import('./SubteamSection');
    SubteamSection = module.default;
  });

  it('renders the component and fetches data', async () => {
    render(<SubteamSection />);
    // Check that the default team is rendered
    expect(await screen.findByText('Project Management')).toBeInTheDocument();
  });

  it('changes the active team when a new team is clicked', async () => {
    render(<SubteamSection />);
    // Wait for the initial data to load
    await screen.findByText('Project Management');

    // Find the button for the 'CAD' team and click it
    const cadButton = screen.getByTestId('subteam-button-cad');
    fireEvent.click(cadButton);

    // Check that the active team's data is updated
    expect(await screen.findByText('Computer-Aided Design')).toBeInTheDocument();
  });

  it('renders the correct background effect for the active team', async () => {
    render(<SubteamSection />);
    await screen.findByText('Project Management');

    // Default team is 'pm', which should render 'Waves'
    expect(screen.getByText('Waves')).toBeInTheDocument();
  });
});
